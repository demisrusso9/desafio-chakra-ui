import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      continent: Model
    },

    seeds(server) {
      server.db.loadData({
        continents: [
          {
            id: 1,
            name: 'Europa',
            subtitle: 'O continente mais antigo.',
            url: 'europe',
            image:
              'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',

            information: {
              description:
                'É o segundo maior continente do mundo, depois da Ásia, tanto por área quanto por população. Compreende 54 países e mais de 16% da população mundial. O continente está espalhado por uma área de 30.370.000 km² e é delimitado a oeste pelo Oceano Atlântico, ao norte pelo Mar Mediterrâneo, a leste pelo Mar Vermelho e pelo Oceano Índico, e ao sul pelos oceanos Atlântico e Índico. Todas as três latitudes- o Equador, Trópico de Câncer, e Tropic de Capricórnio passam pela África.',
              totalCountries: 50,
              totalLanguages: 60,
              totalOfMostVisitedCities: 27
            }
          },
          {
            id: 2,
            name: 'America do Norte',
            subtitle:
              'Tem o rio Mississippi, que é o terceiro maior rio do mundo',
            url: 'north-america',
            image:
              'https://images.unsplash.com/photo-1616832880279-0f4f2de8cb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80',

            information: {
              description:
                'É o terceiro maior continente da Terra em termos de área e o quarto maior em termos de população. Compreende 23 nações e está inteiramente localizada no hemisfério norte. O continente se estende por mais de 24.709.000 km² e faz fronteira com o Oceano Ártico ao norte, o Oceano Atlântico a leste, o Oceano Pacífico a oeste e a América do Sul ao sul. Uma tira muito estreita do Istmo do Panamá conecta-a com a América do Sul e o estreito de Bering o separa da Ásia.',
              totalCountries: 50,
              totalLanguages: 60,
              totalOfMostVisitedCities: 27
            }
          },
          {
            id: 3,
            name: 'África',
            subtitle: 'É o segundo maior continente do mundo.',
            url: 'africa',
            image:
              'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
            information: {
              description:
                'É o segundo maior continente do mundo, depois da Ásia, tanto por área quanto por população. Compreende 54 países e mais de 16% da população mundial. O continente está espalhado por uma área de 30.370.000 km² e é delimitado a oeste pelo Oceano Atlântico, ao norte pelo Mar Mediterrâneo, a leste pelo Mar Vermelho e pelo Oceano Índico, e ao sul pelos oceanos Atlântico e Índico. Todas as três latitudes- o Equador, Trópico de Câncer, e Tropic de Capricórnio passam pela África',
              totalCountries: 50,
              totalLanguages: 60,
              totalOfMostVisitedCities: 27
            }
          },
          {
            id: 4,
            name: 'Ásia',
            url: 'asia',
            subtitle: 'Tem os 10 picos mais altos do mundo',
            image:
              'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            information: {
              description:
                'É o maior continente do mundo, tanto em termos de área quanto de população. Compreende 48 nações e 60% da população mundial. Abrangendo uma área de 44.579.000 km², o continente faz fronteira com o Oceano Pacífico a leste, o Oceano Ártico no norte, o Oceano Índico no sul e a Europa a oeste. As Montanhas Urais o separam da Europa e da Península do Sinai & Mar Vermelho o separam da África.',
              totalCountries: 50,
              totalLanguages: 60,
              totalOfMostVisitedCities: 27
            }
          },
          {
            id: 5,
            name: 'Oceania',
            url: 'oceania',
            subtitle:
              'Uluru na Austrália é o maior monólito de rocha do mundo.',
            image:
              'https://images.unsplash.com/photo-1622732794483-fc1de4dcb3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            information: {
              description:
                'A Austrália é o menor continente do mundo e é o mais plano e o segundo mais seco depois da Antártida. É também o segundo menos povoado depois da Antártida. Compreende 14 países. Espalhada por 8.525.989 km², a região também é descrita como Oceania para diferenciá-la de um país com o mesmo nome. O lugar é um laboratório vivo. Isso porque quando o continente começou a romper com a Antártida há cerca de 60 milhões de anos, ele carregava animais que se desenvolveram em criaturas únicas para a região.',
              totalCountries: 50,
              totalLanguages: 60,
              totalOfMostVisitedCities: 27
            }
          }
        ]
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/continents', () => {
        return this.schema.all('continent')
      })

      this.get('/continents/:name', (schema, request) => {
        let name = request.params.name
        console.log('Parameter: ', name)

        return []
      })

      //Reseta o namespace para vazio após as rotas
      this.namespace = ''
      // Adiciona o passthrough para ignorar rotas que não existem no mirage
      this.passthrough()
    }
  })

  return server
}
