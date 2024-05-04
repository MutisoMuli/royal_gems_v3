import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-32 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full flex items-center">
              <SideMenu regions={regions} />
              <div className="ml-4 flex items-center">
                <div className={styles.container}>
                                    <div className={`${styles.logoText} ${styles.textGold}`}>
                    <span className={`${styles.mainText} font-bold`}>Welcome to Royal Gems Accessories</span>
                    <br />
                    <span className={`${styles.subText} font-bold`}>Est 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base font-bold text-gold"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink className="hover:text-ui-fg-base font-bold text-gold" href="/account" data-testid="nav-account-link">
                <div className={`${styles.container} flex items-center`}>
                  <FontAwesomeIcon icon={faUser} style={{ color: 'gold', width: '25px', height: '25px' }} />
                  <span className={`${styles.subText} text-gold font-bold`}>Login & Register</span>
                </div>
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 font-bold text-gold"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <span style={{ fontWeight: "bold", color: "gold" }}>Cart (0)</span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
