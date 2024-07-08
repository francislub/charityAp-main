// PaginationControls.tsx
'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  childId: string
  length: number
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    childId,
    length,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '1'

  return (
    <div className='flex gap-2'>
      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/sponsorchild/${childId}?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        prev page
      </button>

      <div>
        {page} / {Math.ceil(length / Number(per_page))}
      </div>

      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/sponsorchild/${childId}?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        next page
      </button>
    </div>
  )
}

export default PaginationControls