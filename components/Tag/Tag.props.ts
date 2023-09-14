import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface IPProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 'm' | 's'
	children: ReactNode
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary'
	href?: string
}
