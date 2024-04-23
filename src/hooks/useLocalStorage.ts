import { ITodo } from "models";

const useLocalStorage = (key: string): {
    changeItems: (item: ITodo[]) => ITodo[];
    getData: () => ITodo[];
} => {
    const getData = (): ITodo[] => {
        const storedArray = localStorage.getItem(key);
        const array = storedArray ? JSON.parse(storedArray) : [];
        return array;
    };

    const changeItems = (items: ITodo[]) => {
        localStorage.setItem(key, JSON.stringify(items));
        return items;
    };

    return { getData: getData, changeItems: changeItems };
};

export default useLocalStorage;