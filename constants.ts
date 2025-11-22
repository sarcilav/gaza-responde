import { BookOpen, Heart, PenTool, Globe, HandHeart } from 'lucide-react';
import coverImage from './cover.jpg';

export const BOOK_DETAILS = {
  title: "GAZA RESPONDE", // Uppercase for the font style
  subtitle: "Cuentos de jóvenes escritores en Gaza, Palestina",
  edition: "1ra Edición en español",
  originalEditor: "Refaat Alareer",
  translator: "Migdalia Arcila-Valenzuela",
  description: "Originalmente escrito en inglés y publicado en 2013, este libro contiene 23 cuentos de autores palestinos jóvenes que conmemoran los 5 años de la Operación Plomo Fundido, 23 días de bombardeo israelí sobre Gaza entre diciembre de 2008 y enero de 2009.",
  coverPlaceholder: coverImage, // Uses the imported image path
  donationInfo: "El 100% de las ganancias serán donadas a The Sameer Project",
  price: "$60.000 COP",
  shipping: "Envío a todo el territorio nacional",
  whatsappNumber: "3112229114",
  instagramUser: "@gazaresponde"
};

export const TRANSLATION_DETAILS = {
  translator: "Migdalia Arcila-Valenzuela",
  note: "Este libro es testimonio de la larga historia de lucha palestina en contra de la deshumanización propia del colonialismo sionista. Hoy más que nunca Gaza sigue luchando, narrando, respondiendo por todos los medios posibles al brutal genocidio israelí.",
  motivation: "Desde Colombia nos unimos con esta traducción del texto, originalmente escrito en inglés por 15 autores palestinos y editado por Refaat Alareer, para decirle al mundo que Palestina somos todos. ¡Si tocan a uno respondemos todos!"
};

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre el Libro', href: '#about' },
  { name: 'Traducción', href: '#translator' },
  { name: 'Fragmentos', href: '#excerpts' },
  { name: 'Índice', href: '#toc' },
];

export const FEATURES = [
  {
    name: 'Voces Auténticas',
    description: '23 cuentos escritos por jóvenes autores que vivieron los hechos en primera persona.',
    icon: PenTool,
  },
  {
    name: 'Memoria Histórica',
    description: 'Una conmemoración literaria de la resistencia y la vida bajo ocupación.',
    icon: BookOpen,
  },
  {
    name: 'Solidaridad Total',
    description: 'El 100% de los fondos recaudados se destinan directamente a The Sameer Project.',
    icon: HandHeart,
  },
  {
    name: 'Legado de Refaat',
    description: 'Editado originalmente por el profesor y poeta mártir Refaat Alareer.',
    icon: Heart,
  },
];

export const TABLE_OF_CONTENTS = [
  { title: "Introducción", author: "Refaat Alareer" },
  { title: "L de Lección", author: "Refaat Alareer" },
  { title: "El muro", author: "Hanan Lahlouh" },
  { title: "Cicatrices", author: "Ayah Nabiel" },
  { title: "Deseo que...", author: "Rawan Yaghi" },
  { title: "Mohammad", author: "Tasnim Abutabikh" },
  { title: "Perdida en la oscuridad", author: "Wafaa Abu Al-Qumbos" },
  { title: "Solo una hora", author: "Nour Al-Sousi" },
];

export const EXCERPTS = [
  {
    text: "Gaza responde porque Gaza está viva. Escribir es un acto de vida, una forma de resistencia contra el olvido y la destrucción.",
    source: "Refaat Alareer",
    context: "De la Introducción"
  },
  {
    text: "No somos números. Cada mártir tenía un nombre, una historia, un sueño que fue interrumpido pero que vive en estas páginas.",
    source: "Anónimo",
    context: "Prólogo a la edición en español"
  }
];
