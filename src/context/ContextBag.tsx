import { ReactNode, createContext, useState } from "react";

interface ContextBagType {
    name: string
    price: number
    amount: number
}

interface ContextBagProviderProps {
    children: ReactNode
}

const ContextBag = createContext<ContextBagType | {}>({})


const ContextBagProvider = ({ children }: ContextBagProviderProps) => {
    const [bag, setBag] = useState<ContextBagType>()

    const updateBag = (newValue: ContextBagType) => {
        setBag(newValue)
    }

    return (
        <ContextBag.Provider value={{ bag, updateBag }}>
            {children}
        </ContextBag.Provider>
    )
}

export { ContextBag, ContextBagProvider }