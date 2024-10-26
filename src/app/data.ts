export type Item = {
    title: string;
    description: string;
    date: string;
    highlight?: boolean;
    detail?: {
        link: string;
        linkLabel: string;
        image?: string;
    };
};

const learnMore = "Learn more";
const github = "View on GitHub";
const game = "Try the game";

export const careerItems: Item[] = [
    {
        title: "PKL - PT. KERETA COMMUTER INDONESIA - DIPO DEPOK",
        description: "sebagai seorang siswa untuk melaksanakan PKL, kelistrikkan, komponen, perbaikan, cuci komponen dan lain-lain",
        date: "Januari 2018 - Februari 2018",
        highlight: true,
        detail: {
            link: "",
            linkLabel: learnMore,
            image: "/images/",
        },
    },
export const projectItems: Item[] = [
    {
        title: "Network Architectures",
        description:
            "-",
        date: "Januari 2024",
        highlight: true,
        detail: {
            link: "",
            linkLabel: learnMore,
            image: "/images/",
        },
    },
    {
        title: "Network Fundamental",
        description:
            "-",
        date: "Januari 2024",
        highlight: true,
        detail: {
            link: "",
            linkLabel: learnMore,
            image: "/images/",
        },
    },
    {
        title: "Neural Network Fundamentals",
        description:
            "",
        date: "Januari 2024",
        highlight: false,
        detail: {
            link: "",
            linkLabel: learnMore,
            image: "/",
        },
    },
    {
        title: "Optimizing Network Parameters",
        description:
            "-",
        date: "Januari 2024",
    },
    {
        title: "Pemrograman Python untuk Pemula",
        description: "-",
        date: "Januari 2024",
        detail: {
            link: "",
            linkLabel: learnMore,
            image: "/images/",
        },
    },
    {
        title: "Product Strategy Fundamentals: From Idea to Market Success",
        description: "-",
        date: "Januari 2024",
        detail: {
            link: "",
            linkLabel: learnMore,
            image: "/images/",
        },
    },
    {
        title: "Proyek Sederhana Svelte - Todo App",
        description: "-",
        date: "Januari 2024",
        detail: {
            link: "",
            linkLabel: learnMore,
            image: "/images/",
        },
    },
    {
        title: "Python Fundamental",
        description: "-",
        date: "Januari 2024",
        detail: {
            link: "",
            linkLabel: learnMore,
            image: "/images/",
        },
    },
];
