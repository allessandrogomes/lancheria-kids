import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Snack {
    id: number
    name: string;
    price: number;
    amount: number;
}

type Bag = Snack[]

interface BagContextType {
    bag: Bag
    addSnackToBag: (snack: Snack) => void
    removeSnackFromBag: (snack: Snack) => void
}

const BagContext = createContext<BagContextType | null>(null);

const BagProvider = ({ children }: { children: ReactNode }) => {
    const [bag, setBag] = useState<Bag>([]);

    useEffect(() => {
        console.log(bag)
    }, [bag])

    const addSnackToBag = (snack: Snack) => {
        const snackIndex = bag.findIndex(item => item.id === snack.id)

        if (snackIndex !== -1) {
            const updatedBag = [...bag]
            updatedBag[snackIndex] = {
                ...updatedBag[snackIndex],
                amount: updatedBag[snackIndex].amount + 1
            }
            setBag(updatedBag)
        } else {
            setBag([...bag, snack])
        }
    }

    const removeSnackFromBag = (snack: Snack) => {
        const snackIndex = bag.findIndex(item => item.id === snack.id)

        if (snackIndex !== -1) {
            const updatedBag = [...bag]
            if (updatedBag[snackIndex].amount > 1) {
                updatedBag[snackIndex] = {
                    ...updatedBag[snackIndex],
                    amount: updatedBag[snackIndex].amount - 1
                }
                setBag(updatedBag)
            } else {
                const updatedBagWithSnackRemoved = updatedBag.filter(item => item.id !== snack.id)
                setBag(updatedBagWithSnackRemoved)
            }
        }
    }

    return (
        <BagContext.Provider value={{ bag, addSnackToBag, removeSnackFromBag }}>
            {children}
        </BagContext.Provider>
    );
};

const useBag = () => {
    const context = useContext(BagContext);
    if (!context) {
        throw new Error("useBag must be used within a BagProvider");
    }
    return context;
};

export { BagProvider, useBag };
