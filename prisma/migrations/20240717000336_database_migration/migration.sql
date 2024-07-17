-- CreateTable
CREATE TABLE "Cartoon" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "Cartoon_pkey" PRIMARY KEY ("id")
);
