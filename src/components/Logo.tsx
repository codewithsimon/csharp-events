import React from 'react';
import { Code } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Code size={28} className="text-[#091227]" />
      <span className="text-xl font-bold text-[#091227]">C# Corner</span>
    </div>
  );
};

export default Logo;