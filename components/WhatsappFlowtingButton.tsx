import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  phoneNumber: string;
  size?: 'small' | 'medium' | 'large';
}
const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ phoneNumber, size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-10 w-10 p-2',
    medium: 'h-12 w-12 p-3',
    large: 'h-14 w-14 p-4',
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
    >
      <div
        className={`bg-green-500 rounded-full ${sizeClasses[size]} shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center`}
      >
        <MessageCircle className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
      </div>
    </a>
  );
};

export default WhatsAppFloatingButton;
