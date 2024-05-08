import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-24 mx-auto border-b duration-200 bg-black border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full flex items-center">
              <SideMenu regions={regions} />
              <div className="ml-4 flex items-center">
                <img
                  src="https://res.cloudinary.com/dhbztjzkr/image/upload/v1713957203/royalgems_logo-removebg_rpnnvv.png"
                  alt="Royal Gems Logo"
                  className="h-24 mx-4"
                />
                <div className={styles.container}>
                  <div className={`${styles.logoText} ${styles.textGold}`}>
                    <span className={`${styles.mainText} font-bold`} style={{ color: 'gold' }}>Welcome to Royal Gems Accessories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="search-container">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                  className="hover:text-ui-fg-base font-bold text-gold"
                >
                <button>Search</button>
            </LocalizedClientLink>
            )}
            </div>
            <div className="small:flex items-center gap-x-6 h-full">
              
              <LocalizedClientLink className="hover:text-ui-fg-base font-bold text-gold" href="/account" data-testid="nav-account-link">
                <button style={{ backgroundColor: 'gold', color: 'black', fontWeight: 'bold', padding: '0.5rem 2rem', borderRadius: '0.50rem', fontSize: '1.0rem' }}>
                  Log in
                </button>
              </LocalizedClientLink>
            </div>
            <LocalizedClientLink href="/cart" data-testid="nav-cart-link">
              <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'gold', width: '25px', height: '25px' }} />
            </LocalizedClientLink>
          </div>
        </nav>
      </header>
    </div>
  )
}
