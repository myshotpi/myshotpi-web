"use client";

import Link from "next/link"
import { useParams } from "next/navigation";

export default function ConfirmPage() {
  const params = useParams();
  const id = params?.id ?? "1";


  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">
        
        

        {/* 제목 */}
        <h1 className="text-2xl font-bold mb-3">
          Final Confirmation
        </h1>

        {/* 설명 */}
        <p className="text-gray-600 mb-6">
          You are about to purchase Image #{id} with Pi Payment.
        </p>

        {/* 최종 결제 버튼 */}
        <Link
          href={`/purchase-complete/${id}`}
          className="w-full py-3 rounded-xl text-white font-semibold 
                     bg-gradient-to-r from-purple-500 to-orange-400 
                     hover:opacity-90 transition"
        >
          Final Pay with PI
        </Link>
        
      </div>
    </div>
  );
}