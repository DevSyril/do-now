import { getAuth, clerkClient } from "@clerk/nextjs/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { userId } = getAuth(req); 
      if (!userId) {
        return res.status(401).json({ error: "Non autorisé" });
      }

      const user = await clerkClient.users.getUser(userId);

      const savedUser = await prisma.user.create({
        data: {
          clerkId: userId, 
          email: user.emailAddresses[0]?.emailAddress || "no-email@example.com",
          name: user.firstName || "Unknown",
        },
      });

      res.status(200).json({ message: "Utilisateur enregistré", user: savedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}
