
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


// const RegisterUser = () => {
//     return (
//         <div className="bg-gray-300">
//             <form>
//                 <div className="space-y-12">
//                     <div className="border-b border-gray-900/10 pb-12">
//                         <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
//                         <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>


//                         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                             <div className="sm:col-span-3">
//                                 <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-3">
//                                 <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-4 ">
//                                 <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
//                                 <div className="mt-2">
//                                     <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
                            

//                             <div className="sm:col-span-4">
//                                 <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">password</label>
//                                 <div className="mt-2">
//                                     <input id="password" name="password" type="password" autoComplete="password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>
//                             </div>

//                             {/* <div className="sm:col-span-3">
//                                 <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">Password</label>
//                                 <div className="mt-2 grid grid-cols-1">
//                                     <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
//                                         <option>United States</option>
//                                         <option>Canada</option>
//                                         <option>Mexico</option>
//                                     </select>
//                                     <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
//                                         <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
//                                     </svg>
//                                 </div>
//                             </div> */}

//                             <div className="col-span-full">
//                                 <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">Street address</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-2 sm:col-start-1">
//                                 <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">City</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">State / Province</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="mt-6 flex items-center justify-end gap-x-6">
//                     <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
//                     <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
//                 </div>
//             </form>

//         </div>
//     )
// }

// export default RegisterUser











// const RegisterUser = () => {
//     return (
//         <div>
//             <form>
//                 <div className="space-y-12">
//                     <div className="border-b border-gray-900/10 pb-12">
//                         <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
//                         <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

//                         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                             <div className="sm:col-span-3">
//                                 <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-3">
//                                 <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>

//                             {/* Flex layout for email and password in one row */}
//                             <div className="sm:col-span-3 flex gap-6">
//                                 <div className="w-full">
//                                     <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
//                                     <div className="mt-2">
//                                         <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                     </div>
//                                 </div>

//                                 <div className="w-full">
//                                     <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
//                                     <div className="mt-2">
//                                         <input id="password" name="password" type="password" autoComplete="password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Other fields */}
//                             <div className="col-span-full">
//                                 <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">Street address</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-2 sm:col-start-1">
//                                 <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">City</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">State / Province</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
//                                 <div className="mt-2">
//                                     <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mt-6 flex items-center justify-end gap-x-6">
//                     <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
//                     <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default RegisterUser;














const RegisterUser = () => {
    const {register,handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = async data => {
        console.log("submitting..",data);
        try {
            const response = await axios.post(import.meta.env.VITE_USER_URL,data);
            console.log(response);
            toast.success("user registered succesfully!")
            setTimeout(() => {
                navigate("/login");
            }, 2000);
            
        } catch (error) {
            toast.error("unable to register!")
            console.log(error);
            
        }
        
    }
    return (
        <div className="max-w-2xl mx-auto" >
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12" >
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input type="text" name="firstname" id="firstname" {...register("firstname",{required:"this field is required", minLength:{
                                        value:2,
                                        message:"atleast 2 characters are required!"},
                                        pattern:{
                                            value: /^[A-Za-z]+$/i,
                                            message:"no disits or special characters are allowed"
                                        } })} autoComplete="given-name" className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 border-4 border-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                        {errors.firstname && <span className="text-red-600">{errors.firstname?.message}</span>}
                                    
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input type="text" name="lastname" id="lastname" {...register("lastname",{required:"this field is required"})} autoComplete="family-name" className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 border-4 border-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {/* {errors.lastname && <span className="text-red-600">{errors.lastname?.message}</span>} */}
                                    
                                </div>
                            </div>

                            {/* Flex layout for email and password in one row */}
                            <div className="sm:col-span-3 flex gap-6">
                                <div className="w-full">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 ">Email address</label>
                                    <div className="mt-2">
                                        {/* <input id="email" name="email" type="email" autoComplete="email" className="block w-full px-40 rounded-lg bg-white  py-2 text-base text-gray-900 border-4 border-gray-200 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 placeholder:text-gray-600" /> */}
                                         <input id="email" name="email" type="email" {...register("email",{required:"this field is required"})} autoComplete="email" className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 border-4 border-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                         {errors.email && <span className="text-red-600">{errors.email?.message}</span>}
                                    </div>
                                </div>

                                <div className="w-full">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                                    <div className="mt-2">
                                        <input id="password" name="password" type="password" {...register("password",{required:"this field is required",
                                              pattern:{
                                                value:/^[A-Za-z0-9 .@]{6,20}$/i,
                                                message:"password must contain only alphabets,space, . ,$,@ end greater than 6!"
                                            }})} autoComplete="password" className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 border-4 border-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                        {errors.password && <span className="text-red-600">{errors.password?.message}</span>}
                                    </div>
                                </div>
                            </div>

                            {/* Other fields */}
                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-900">address</label>
                                <div className="mt-2">
                                    <input type="text" name="address" id="address" {...register("address",{required:"this field is required"})} autoComplete="street-address" className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 border-4 border-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {/* {errors.streetAddress && <span className="text-red-600">{errors.streetAddress?.message}</span>} */}
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-900">City</label>
                                <div className="mt-2">
                                    <input type="text" name="region" id="region" {...register("city",{required:"this field is required"})} autoComplete="address-level2" className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 border-4 border-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {/* {errors.city && <span className="text-red-600">{errors.city?.message}</span>} */}
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium text-gray-900">State / Province</label>
                                <div className="mt-2">
                                    <input type="text" name="region" id="region" {...register("state",{required:"this field is required"})}autoComplete="address-level1" className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 border-4 border-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {/* {errors.state && <span className="text-red-600">{errors.state?.message}</span>} */}
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-900">ZIP / Postal code</label>
                                <div className="mt-2">
                                    <input type="text" name="postal-code" id="postal-code"{...register("pincode",{
                                    required:"this field is required"})} autoComplete="postal-code" className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 border-4 border-gray-200 shadow-sm outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {/* {errors.pincode && <span className="text-red-600">{errors.pincode?.message}</span>} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterUser;
