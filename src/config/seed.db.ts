import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding database...");

    // Criando vários usuários com posts
    const user1 = await prisma.user.create({
        data: {
            email: "john.doe@example.com",
            name: "John Doe",
            cpf: "12345678901",
            Posts: {
                create: [
                    { title: "Meu primeiro post", content: "Conteúdo do post 1", published: true },
                    { title: "Post sobre NestJS", content: "NestJS é incrível!", published: false },
                    { title: "Desenvolvendo em JavaScript", content: "Dicas de JavaScript", published: true }
                ]
            }
        }
    });

    const user2 = await prisma.user.create({
        data: {
            email: "jane.smith@example.com",
            name: "Jane Smith",
            cpf: "98765432100",
            Posts: {
                create: [
                    { title: "Post da Jane", content: "Primeiro post de Jane", published: true },
                    { title: "Vida de desenvolvedora", content: "Como é trabalhar com código", published: false },
                    { title: "Minha jornada com React", content: "Aprendendo React", published: true },
                    { title: "Desenvolvendo com TypeScript", content: "TypeScript é o futuro", published: true }
                ]
            }
        }
    });

    const user3 = await prisma.user.create({
        data: {
            email: "bob.jones@example.com",
            name: "Bob Jones",
            cpf: "11223344556",
            Posts: {
                create: [
                    { title: "Bob's tech blog", content: "A technology revolution!", published: true },
                    { title: "Becoming a better coder", content: "Improving your coding skills", published: true }
                ]
            }
        }
    });

    const user4 = await prisma.user.create({
        data: {
            email: "alice.brown@example.com",
            name: "Alice Brown",
            cpf: "66778899000",
            Posts: {
                create: [
                    { title: "Exploring Prisma", content: "Integrando o Prisma com Node.js", published: true },
                    { title: "My experience with Fastify", content: "Fastify é rápido e fácil", published: false },
                    { title: "Databases 101", content: "Introdução ao PostgreSQL", published: true },
                    { title: "Como criar APIs RESTful", content: "Construindo APIs eficientes", published: false }
                ]
            }
        }
    });

    const user5 = await prisma.user.create({
        data: {
            email: "charlie.williams@example.com",
            name: "Charlie Williams",
            cpf: "44556677889",
            Posts: {
                create: [
                    { title: "A vida com Docker", content: "Utilizando Docker no desenvolvimento", published: true },
                    { title: "Microservices in Node.js", content: "Como arquitetar microserviços em Node", published: true },
                    { title: "Trabalhando com Kubernetes", content: "Orquestrando containers", published: true }
                ]
            }
        }
    });

    const user6 = await prisma.user.create({
        data: {
            email: "susan.lee@example.com",
            name: "Susan Lee",
            cpf: "99887766554",
            Posts: {
                create: [
                    { title: "Machine Learning Basics", content: "Iniciando com Machine Learning", published: false },
                    { title: "Introdução ao Python", content: "Python é maravilhoso!", published: true },
                    { title: "Data Science com R", content: "Análise de dados com R", published: true },
                    { title: "Estudos sobre IA", content: "Inteligência Artificial é o futuro", published: true },
                    { title: "Automação de tarefas com scripts", content: "Automatizando processos no trabalho", published: false }
                ]
            }
        }
    });

    console.log("Seed completed successfully!");
}

main()
    .catch(e => {
        console.error("Error seeding database:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
