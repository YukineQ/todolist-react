import { ChangeEvent, FormEvent, useState } from "react";

interface Validation {
    required?: {
        value: boolean;
        message: string;
    };
    pattern?: {
        value: string;
        message: string;
    },
    custom?: {
        isValid: (value: string) => boolean;
        message: string;
    };
}

type Validations<T extends {}> = Partial<Record<keyof T, Validation>>

type ErrorRecord<T> = Partial<Record<keyof T, string>>

export const useForm = <T extends Record<keyof T, any>>(options?: {
    validations?: Validations<T>,
    initialValues?: Partial<T>,
    callback: () => void,
}) => {
    const [data, setData] = useState<T>((options?.initialValues || {}) as T)
    const [errors, setErrors] = useState<ErrorRecord<T>>({})

    const handleChange = (key: keyof T) =>
        (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
            setData({ ...data, [key]: e.target.value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validations = options?.validations
        if (validations) {
            let isValid = true;
            const newErrors: ErrorRecord<T> = {}
            for (const key in validations) {
                const value = data[key]
                const validation = validations[key]
                if (validation?.required?.value && !value) {
                    isValid = false
                    newErrors[key] = validation?.required?.message
                }

                const pattern = validation?.pattern
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    isValid = false
                    newErrors[key] = pattern.message
                }

                const custom = validation?.custom
                if (custom?.isValid && !custom.isValid(value)) {
                    isValid = false
                    newErrors[key] = custom.message
                }
            }

            if (!isValid) {
                setErrors(newErrors)
                return
            }
        }

        setErrors({})

        if (options?.callback) {
            return new Promise(() => {
                options.callback()
            })
        }
    }

    return {
        data,
        handleChange,
        handleSubmit,
        errors
    }
}