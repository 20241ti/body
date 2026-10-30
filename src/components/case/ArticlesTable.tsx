import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useCaseContext } from '../../context/CaseContext';

export const ArticlesTable: React.FC = () => {
  const { currentCase } = useCaseContext();
  const [sortAsc, setSortAsc] = useState(true);

  const articles = [...currentCase.articles].sort((a, b) => {
    return sortAsc
      ? a.itemNumber.localeCompare(b.itemNumber)
      : b.itemNumber.localeCompare(a.itemNumber);
  });

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-slate-200">
        Articles ({articles.length})
      </h3>

      <div className="border border-[#262b36] rounded-lg overflow-hidden bg-[#12151c] shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#262b36] text-slate-400 font-medium bg-[#181b23]">
              <th scope="col" className="py-2.5 px-4 w-20">Thumbnail</th>
              <th scope="col" className="py-2.5 px-4">
                <button
                  type="button"
                  onClick={() => setSortAsc(!sortAsc)}
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Item #</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-500" />
                </button>
              </th>
              <th scope="col" className="py-2.5 px-4">Category</th>
              <th scope="col" className="py-2.5 px-4">Status</th>
              <th scope="col" className="py-2.5 px-4">Type</th>
              <th scope="col" className="py-2.5 px-4">Location</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#262b36]/60 bg-[#12151c]">
            {articles.map((art) => (
              <tr
                key={art.id}
                className="hover:bg-[#181b23] transition-colors"
              >
                <td className="py-3 px-4">
                  <div className="w-12 h-10 rounded border border-[#262b36] bg-[#0c0e12] overflow-hidden flex items-center justify-center">
                    <img
                      src={art.thumbnail}
                      alt={art.type}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="py-3 px-4 font-mono font-medium text-slate-200">
                  {art.itemNumber}
                </td>
                <td className="py-3 px-4 text-slate-300">
                  {art.category}
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
                    {art.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-300 font-medium">
                  {art.type}
                </td>
                <td className="py-3 px-4 text-slate-400 font-mono">
                  {art.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
