export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar microservicos com NodeJS",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 2,
          content: "Criar interface de usuario no adobe xd",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 3,
          content: "Estudar mais sobre ferrametas de desgin",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 4,
          content:
            'Palestra "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 5,
          content: "Testar deploy de aplicações",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
      ],
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Recriando clone do Pipefy",
          labels: ["#00ffff"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
      ],
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Readme das aplicações",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 8,
          content: "Ajustes de layout",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 9,
          content: "Ajustes na estrutura dos readmes",
          labels: ["#800000"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
      ],
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "CI com NodeJs e AWS",
          labels: [],
        },
        {
          id: 12,
          content: "Deploy de aplicações ReactJS",
          labels: ["#54e1f7"],
        },
        {
          id: 13,
          content:
            'Palestras "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ["#7159c1"],
        },
      ],
    },
  ];
}
