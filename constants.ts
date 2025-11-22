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
  sameerUrl: "https://www.instagram.com/thesameerproject",
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
  { title: "L de libertad", author: "Hanan Habashi" },
  { title: "Un muro", author: "Rawan Yahghi" },
  { title: "Cicatrices", author: "Aya Rabah" },
  { title: "Un deseo de insomnio", author: "Nour El Borno" },
  { title: "Mi hogaza de pan", author: "Tasnim Hamouda" },
  { title: "Perdida para siempre", author: "Elham Hilles" },
  { title: "Solo quince minutos", author: "Wafaa Abu Al-Qomboz" },
];

export const EXCERPTS = [
  {
    text: "Gaza cuenta historias porque Palestina está a tan solo un cuento corto de distancia. Gaza cuenta historias para que la gente no olvide. Gaza responde porque el poder de la imaginación es una manera creativa de construir una nueva realidad. Gaza responde porque escribir es una obligación nacionalista, un deber con la humanidad, y una responsabilidad moral",
    source: "Refaat Alareer",
    context: "Introducción del editor"
  },
  {
    text: "La absoluta determinación de luchar con todo lo que se tiene, con todos los medios posibles, en contra del proyecto sionista, en contra de la maquinaria salvaje que demuele palmo a palmo, ante nuestros ojos, la vida en Palestina es lo que motiva esta edición en español. Esta traducción es nuestra manera de extenderle los brazos a nuestros hermanos palestinos, de decirles que su voz, su sufrimiento, pero también su persistencia y tenacidad resuenan en toda América Latina.",
    source: "Migdalia Arcila-Valenzuela",
    context: "Prólogo a la edición en español"
  }
];
