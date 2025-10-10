

type contactInputProps = {
    input: string,
    setInput: (value: string) => void,
    name: string, 
    placeholder: string,
}

export default function ContactInput({input, setInput, name, placeholder}:contactInputProps) {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-3">
        <p className="text-[#ffffff] inter">{name}</p>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} placeholder={placeholder} className="
            border-none w-full h-[50px] bg-[#424242] text-[#ffffff] p-2 outline-none inter
        " />
    </div>
  )
}