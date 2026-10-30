import { useState, useMemo } from 'react';
import { useCameraContext } from '../context/CameraContext';
import { IncidentSeverity } from '../types';

export function useIncidents() {
  const { incidents, updateIncidentStatus, isLoading } = useCameraContext();
  const [filterSeverity, setFilterSeverity] = useState<IncidentSeverity | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIncidents = useMemo(() => {
    return incidents.filter((incident) => {
      const matchesSeverity = filterSeverity === 'all' || incident.severity === filterSeverity;
      const matchesSearch =
        incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        incident.officerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        incident.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSeverity && matchesSearch;
    });
  }, [incidents, filterSeverity, searchQuery]);

  const criticalCount = useMemo(
    () => incidents.filter((i) => i.severity === 'critical').length,
    [incidents]
  );

  return {
    incidents: filteredIncidents,
    allCount: incidents.length,
    criticalCount,
    filterSeverity,
    setFilterSeverity,
    searchQuery,
    setSearchQuery,
    updateStatus: updateIncidentStatus,
    isLoading,
  };
}

