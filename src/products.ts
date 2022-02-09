type Product = {
  id: number,
  item: string
  valor: number
}

type Combo = {
  combo: number
  produtos: {
    id: number
  }[]
  desc: number
}

type ComboFinal = {
  combo: number,
  produtos: Product[],
  valorBruto: number,
  aPagar: number
}

const arr1: Product[] = [
  {
    id: 1,
    item: 'pastel',
    valor: 7.9
  },

  {
    id: 2,
    item: 'coxinha de frango',
    valor: 6
  },

  {
    id: 3,
    item: 'guaraná',
    valor: 4.5
  },

  {
    id: 4,
    item: 'caldo de cana',
    valor: 12
  },

  {
    id: 5,
    item: 'chocolate',
    valor: 3.5
  }
]

const arr2: Combo[] = [
  {
    combo: 1,
    produtos: [
      {id: 1}, 
      {id: 3}, 
      {id: 5}
    ],  
    desc: 0.03
  },

  {
    combo: 2,
    produtos: [
      {id: 1},
      {id: 2},
      {id: 3}
      ],
    desc: 0.05
  },

  {
    combo: 3,
    produtos: [
      {id: 1},
      {id: 4}
    ],
    desc: 0.10
  }

]

const calculaDesconto = function(valorBruto: number, desconto: number): number {
  return Number((valorBruto - (valorBruto * desconto)).toFixed(2))
}


const montaCombo = function(arr1: Product[], arr2: Combo[], combo: number): ComboFinal | string {

    var comboItem = arr2.find(item => item.combo === combo)

    if(!comboItem) return 'Combo não registrado'

    var obj: ComboFinal = {
      combo: comboItem.combo,
      produtos: [],
      valorBruto: 0,
      aPagar: 0
    }

    comboItem.produtos.map(produto => {
      arr1.find(item => {
        if(item.id === produto.id) {
          obj.produtos.push(item)
          obj.valorBruto += item.valor
        }
      })
    })

    obj.aPagar = calculaDesconto(obj.valorBruto, comboItem.desc)
    

  return obj
}

console.log(montaCombo(arr1, arr2, 5))
console.log(montaCombo(arr1, arr2, 2))