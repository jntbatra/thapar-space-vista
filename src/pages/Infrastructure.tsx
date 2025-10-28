import { Import,  } from 'lucide-react'
import React from 'react'
import InfrastructureSection from '@/components/InfrastructureSection'
import Navigation from '@/components/Navigation'
type Props = {}

const Infrastructure = (props: Props) => {
  return (
    <div>
       <Navigation />
       <div className="min-h-screen pt-20">
        <InfrastructureSection />
       </div>
    </div>
  )
}

export default Infrastructure