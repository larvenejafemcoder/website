export interface Project {
  name: string
  year: number
  url: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'Minecraft Beta .NET',
    year: 2026,
    url: 'https://github.com/larvenejafemcoder/MinecraftBetaDotnetProj',
    description: 'Minecraft Beta 1.7.3 ported to C#. Deep dive into game engine architecture, block-based world generation, entity systems, and OpenGL rendering pipelines.',
    tags: ['C#', 'OpenGL', 'Game Engine', '.NET'],
  },
  {
    name: 'Reverse Engineering',
    year: 2026,
    url: 'https://github.com/larvenejafemcoder/Reverse_Engineering',
    description: 'Computer Systems course project focusing on binary analysis, disassembly, and keygen implementation for CrackMe challenges.',
    tags: ['Assembly', 'Binary Analysis', 'Security'],
  },
  {
    name: 'C Lang Std Libs',
    year: 2026,
    url: 'https://github.com/larvenejafemcoder/CLang_Stdbased_Libs',
    description: 'Custom implementations of C standard library functions based on GCC internals. Built for understanding how libc operates under the hood.',
    tags: ['C', 'Systems Programming', 'GCC'],
  },
  {
    name: 'Mukus',
    year: 2026,
    url: 'https://github.com/larvenejafemcoder/Mukus',
    description: 'A Rufus-inspired USB bootable drive creator for Linux systems. Built in Python with focus on reliability and low-level disk I/O.',
    tags: ['Python', 'Systems', 'Linux', 'GUI'],
  },
  {
    name: 'Blog Post FE',
    year: 2026,
    url: 'https://github.com/larvenejafemcoder/BlogPostFE',
    description: 'A fast blog frontend built with Astro. Content-first design with minimal JavaScript overhead and optimized static generation.',
    tags: ['Astro', 'TypeScript', 'SSG'],
  },
  {
    name: 'Rust Lang',
    year: 2026,
    url: 'https://github.com/larvenejafemcoder/Rust-Lang',
    description: 'Collection of Rust projects exploring ownership, borrowing, concurrency, and systems programming patterns.',
    tags: ['Rust', 'Systems', 'Concurrency'],
  },
  {
    name: 'Sorting Algorithms Java',
    year: 2026,
    url: 'https://github.com/larvenejafemcoder/SortingAlgo_Java',
    description: 'Classic sorting algorithms implemented in Java with performance comparisons, complexity analysis, and visualizations.',
    tags: ['Java', 'Algorithms', 'Data Structures'],
  },
  {
    name: 'dd Writer Tkinter',
    year: 2026,
    url: 'https://github.com/larvenejafemcoder/ddwritertkinter',
    description: 'A graphical disk image writer for Linux, wrapping the dd utility with a Tkinter-based GUI for user-friendly USB flashing.',
    tags: ['Python', 'Tkinter', 'Linux', 'Systems'],
  },
]
