'use client'

import { Share2 } from 'lucide-react'

export default function ShareButton() {
  const copyToClipboard = () => {
    try {
      const urlToCopy = window.location.href
      
      // Method 1: Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(urlToCopy)
      } else {
        // Fallback method for localhost/http
        const textarea = document.createElement('textarea')
        textarea.value = urlToCopy
        textarea.style.position = 'fixed'
        textarea.style.left = '-999999px'
        textarea.style.top = '-999999px'
        document.body.appendChild(textarea)
        
        textarea.focus()
        textarea.select()
        textarea.setSelectionRange(0, 99999)
        
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={copyToClipboard}
        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Copy URL"
      >
        <Share2 size={20} />
      </button>
    </div>
  )
}
