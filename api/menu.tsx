import { API } from '@/app/api'
import { MenuItem } from '@/interfaces/menu.interface'

export const getMenu = async (firstCategory: number): Promise<MenuItem[]> => {
	const res = await fetch(API.topPage.find, {
		method: 'POST',
		body: JSON.stringify({ firstCategory }),
		headers: new Headers({ 'Content-Type': 'application/json' })
	})
	return res.json()
}
