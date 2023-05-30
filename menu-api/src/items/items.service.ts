
// /**
//  * Data Model Interfaces
//  */
// import { BaseItems,Item } from "./item.interface";
// import { Items } from "./items.interface";

// let items : Items = {
//    1 : { 
//     id: 1,
//     name: "Burger",
//     price: 37,
//     description: "ACHA HAI",
//     image: "baaadme daalunga",
//    },
//    2 : { 
//     id: 2,
//     name: "Pizza",
//     price: 120,
//     description: "Dominoz",
//     image: "baaadme daalunga",
//    },
//    3 : { 
//     id: 3,
//     name: "Sandwich",
//     price: 70,
//     description: "Grilled cheese",
//     image: "baaadme daalunga",
//    },
// };


// /**
//  * Service Methods
// //  */
// // export const findAll = async (): Promise<Item[]> => Object.values(items);
// // export const find = async (id: number): Promise<Item> => items[id];


// export const create = async (newItem: BaseItems): Promise<Item> => {
//  const id = new Date().valueOf();


//  items[id] = {
//     id,
//     ...newItem,
//  }

//  return items[id];

// }

// export const update = async ( id: number, itemUpdate: BaseItems ): Promise<Item|null> => {
//     const item = await find(id);

//     if(!item){
//         return null;
//     }

//     items[id]= {id, ...itemUpdate};

//     return items[id];
// }

// export const remove = async (id: number): Promise<null | void> => {
//     const item = await find(id);
  
//     if (!item) {
//       return null;
//     }
  
//     delete items[id];
//   };