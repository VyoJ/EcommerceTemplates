import Image from "next/image";

interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  img: string;
  desc: string;
  price: number;
  specs: string;
}

function CartCard({ name, img, desc, price, specs }: ProductProps) {
  return (
    <div className="justify-between mb-6 rounded-lg p-6 shadow-md sm:flex sm:justify-start">
      <div className="w-40 h-40">
        <Image
          src={img}
          alt="product-image"
          height={160}
          width={160}
        />
      </div>
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="mt-1 text-xs">{desc}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center space-x-4">
            <p className="text-sm">{price}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
