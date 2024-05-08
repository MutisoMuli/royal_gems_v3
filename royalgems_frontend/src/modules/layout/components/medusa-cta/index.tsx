import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center" style={{ color: '#3b82f6' }}>>
      <span>Developed by</span>
      <a
        href="https://twitter.com/MutisoMuli_PE"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Mutiso Muli
      </a>
    </Text>
  )
}

export default MedusaCTA
