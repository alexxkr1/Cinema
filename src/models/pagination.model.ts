export interface PaginationParams {
    startDate: string
    startTime: string
    language: string
}

export interface Paginated<T> {
    result: {
      count: number
      page_size: number
      results: T
    }
    message: string
    status: string
  }
  