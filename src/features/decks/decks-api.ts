import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})
export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>(`decks`)
  },
  addDeck(name: string) {
    return instance.post<Deck>(`decks`, { name })
  },
  updateDeck(id: string, name: string) {
    return instance.patch(`decks/${id}`, { name })
  },
  removeDeck(id: string) {
    return instance.delete(`decks/${id}`)
  },
}

export type FetchDecksResponse = {
  items: Deck[],
  pagination: Pagination,
  maxCardsCount: number
}

export type Deck = {
  author: Author,
  id: string,
  userId: string,
  name: string,
  isPrivate: true,
  shots: number,
  cover: string,
  rating: number,
  created: string,
  updated: string,
  cardsCount: number
}
export type Author = {
  id: string,
  name: string
}
export type Pagination = {
  currentPage: number,
  itemsPerPage: number,
  totalPages: number,
  totalItems: number
}



