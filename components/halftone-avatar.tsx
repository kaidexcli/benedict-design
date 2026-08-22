import Image from "next/image";

export default function HalftoneAvatar() {
  return (
    <div className="relative w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border border-indigo-200/60 bg-indigo-100/50 shrink-0 shadow-xl">
      <Image 
        src="/benedict.jpg" 
        alt="Avatar" 
        fill
        className="object-cover grayscale"
      />
    </div>
  );
}
