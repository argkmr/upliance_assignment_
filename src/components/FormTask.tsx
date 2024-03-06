import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { setFormData, setUserArray } from "../redux/features/formStateSlice";
import { RootState } from "../redux/store";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    overallExp: string;
    reactExp: string;
    city: string;
    concent: string;
}

const FormTask = () => {
    function generateId() {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/[]{}";
        let id = "";
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            id += charset.charAt(randomIndex);
        }
        return id;
    }

    const dispatch = useDispatch();
    const userArray = useSelector((state: RootState) => state.formState.userArray);
    const formData = useSelector((state: RootState) => state.formState.formData);
    const [selectedCity, setSelectedCity] = useState("");
    const [hasChanged, setHasChanged] = useState(false);

    const onFormChangeHandler = () => {
        setHasChanged(true);
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const onFromSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
        const userId = generateId();
        const formDataWithId = { ...data, userId };
        const updatedArray = [...userArray, formDataWithId]
        dispatch(setUserArray(updatedArray));
        dispatch(setFormData(formDataWithId));
        reset();
    };

    useEffect(() => {
        window.localStorage.setItem("USER_ARRAY", JSON.stringify(userArray));
        window.localStorage.setItem("USER_INFO", JSON.stringify(formData));
    }, [userArray]);

    useEffect(() => {
        const handler = (e: any) => {
            e.preventDefault();
            if (!hasChanged) {
                return;
            }
            e.returnValue = true;
        };

        window.addEventListener("beforeunload", handler);
        return () => window.removeEventListener("beforeunload", handler);
    }, [hasChanged]);


    return (
        <div className="form-container">

            <form onSubmit={handleSubmit(onFromSubmit)} onChange={onFormChangeHandler}>
                <div className="form-box">
                    <div className="form-heading">
                        Please fill the form and submit
                    </div>

                    <input {...register("firstName", {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })} placeholder="First Name" />
                    {errors.firstName && <span className="errors">{errors.firstName.message}</span>}

                    <input {...register("lastName", {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })} placeholder="Last Name" />
                    {errors.lastName && <span className="errors">{errors.lastName.message}</span>}

                    <input {...register("email", {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })} placeholder="Email" />
                    {errors.email && <span className="errors">{errors.email.message}</span>}

                    <input {...register("phoneNumber", {
                        required: 'This is required',
                        maxLength: { value: 10, message: 'Maximum length should be 10' },
                    })} placeholder="Phone Number" />
                    {errors.phoneNumber && <span className="errors">{errors.phoneNumber.message}</span>}

                    <select {...register("gender")}>
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <input {...register("overallExp", {
                        required: 'This is required',
                        maxLength: { value: 1, message: 'Minimum length should be 1' },
                    })} placeholder="Overall Experience" />
                    {errors.overallExp && <span className="errors">{errors.overallExp.message}</span>}


                    <input {...register("reactExp", {
                        required: 'This is required',
                        maxLength: { value: 1, message: 'Minimum length should be 1' },
                    })} placeholder="React JS Experience" />
                    {errors.reactExp && <span className="errors">{errors.reactExp.message}</span>}

                    <select
                        {...register("city", {
                            required: 'This is required',
                        })}
                        name="city"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="">Choose your city</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="kolkata">kolkata</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.city && <span className="errors">{errors.city.message}</span>}

                    <select {...register("concent")} disabled={selectedCity === "Bangalore"}>
                        <option value="">Are you willing to relocate to Bangalore?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <input className="submit-button" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default FormTask;