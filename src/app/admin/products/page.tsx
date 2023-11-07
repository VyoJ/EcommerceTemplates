import { AdminSidebar } from "@/components/adminSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function AdminProducts() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="grid grid-cols-3 w-full h-16 items-center">
        <div className="justify-self-center">
          <Button>
            <Link href="/admin/products/add">Add Product</Link>
          </Button>
        </div>
        <div className="mx-auto">
          <Button>
            <Link href="/">Update Product</Link>
          </Button>
        </div>
        <div className="mx-auto">
          <Button>
            <Link href="/">Delete Product</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
