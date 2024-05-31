import flowers from "@/mock/flowers.js";

const orders = [
    {
        id: '98232378',
        date: new Date(),
        state: 'В процессе',
        flowers: [
            flowers[0],
            flowers[1]
        ]
    },
    {
        id: '98232377',
        date: new Date(),
        state: 'Выполнено',
        flowers: [
            flowers[3]
        ]
    },
    {
        id: '98232376',
        date: new Date(),
        state: 'Выполнено',
        flowers: [
            flowers[3],
            flowers[7]
        ]
    }
]

export default orders;
