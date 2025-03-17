// src/utils/iconHelpers.tsx
import { FiRadio, FiShield, FiCpu } from 'react-icons/fi';

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'radio':
      return <FiRadio className="w-6 h-6" />;
    case 'shield':
      return <FiShield className="w-6 h-6" />;
    case 'cpu':
      return <FiCpu className="w-6 h-6" />;
    default:
      return <FiRadio className="w-6 h-6" />;
  }
};