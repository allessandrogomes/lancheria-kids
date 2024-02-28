import { createContext, useContext, useState, ReactNode } from "react";

interface Snack {
    id: number
    name: string;
    price: number;
    amount: number;
}

interface Bag {
    snacks: Snack[]
    totalPriceSnacks: number
    totalAmountSnacks: number
}

interface BagContextType {
    bag: Bag
    addSnackToBag: (snack: Snack) => void
    removeSnackFromBag: (snack: Snack) => void
}

const BagContext = createContext<BagContextType | null>(null);

const BagProvider = ({ children }: { children: ReactNode }) => {
    const [bag, setBag] = useState<Bag>({ snacks: [], totalPriceSnacks: 0, totalAmountSnacks: 0 });

    const addSnackToBag = (snack: Snack) => {

        setBag(prevBag => {
            const snackIndex = prevBag.snacks.findIndex(item => item.id === snack.id)

            if (snackIndex !== -1) {
                const updatedSnacks = [...prevBag.snacks]
                updatedSnacks[snackIndex] = {
                    ...updatedSnacks[snackIndex],
                    amount: updatedSnacks[snackIndex].amount + 1
                }
                return {
                    ...prevBag,
                    snacks: updatedSnacks
                }
            } else {
                return {
                    ...prevBag,
                    snacks: [...prevBag.snacks, { ...snack, amount: 1 }]
                }
            }
        })

        sumTotalOrderPriceAndAmount()
    }

    const removeSnackFromBag = (snack: Snack) => {

        setBag(prevBag => {
            const snackIndex = prevBag.snacks.findIndex(item => item.id === snack.id);

            if (snackIndex !== -1) {
                const updatedSnacks = [...prevBag.snacks];
                if (updatedSnacks[snackIndex].amount > 1) {
                    updatedSnacks[snackIndex] = {
                        ...updatedSnacks[snackIndex],
                        amount: updatedSnacks[snackIndex].amount - 1
                    };
                    return {
                        ...prevBag,
                        snacks: updatedSnacks
                    };
                } else {
                    return {
                        ...prevBag,
                        snacks: updatedSnacks.filter(item => item.id !== snack.id)
                    };
                }
            } else {
                return prevBag;
            }
        });
        sumTotalOrderPriceAndAmount()
    }

    const sumTotalOrderPriceAndAmount = () => {

        setBag(prevBag => {
            const totalPriceAndAmountOfSnacks = {
                totalPriceSnacks: 0,
                totalAmountSnacks: 0
            }

            prevBag.snacks.forEach(snackOfBag => {
                totalPriceAndAmountOfSnacks.totalAmountSnacks += snackOfBag.amount;
                totalPriceAndAmountOfSnacks.totalPriceSnacks += snackOfBag.price * snackOfBag.amount;
            })

            return {
                ...prevBag,
                totalAmountSnacks: totalPriceAndAmountOfSnacks.totalAmountSnacks,
                totalPriceSnacks: totalPriceAndAmountOfSnacks.totalPriceSnacks
            }
        })
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
