import { useSettings } from '@/contexts/SettingsContext'
import { getLogoUrl } from '@/lib/logo-utils'

export const BrandLogoLeft = () => {
  const { logos } = useSettings()

  if (!logos) {
    return (
      <h1 className="text-2xl font-extrabold ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Hydro Elite
      </h1>
    )
  }

  const mainLogoUrl = getLogoUrl(logos, 'main_logo')

  if (!mainLogoUrl) {
    return (
      <h1 className="text-2xl font-extrabold ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Hydro Elite
      </h1>
    )
  }

  return (
    <a href="/" aria-label="Home" className="ml-2">
      <img 
        src={mainLogoUrl} 
        alt="Hydro Elite"
        className="h-8 w-auto object-contain" 
      />
    </a>
  )
}
