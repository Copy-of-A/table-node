import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Table } from './components/Table/Table'
import { FilterQuery } from './components/const'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Table filterQuery={null} />} />
      <Route path="/contains" element={<Table filterQuery={FilterQuery.Contains}/>} />
      <Route path="/equals" element={<Table filterQuery={FilterQuery.Equals} />} />
      <Route path="/less" element={<Table filterQuery={FilterQuery.Less} />} />
      <Route path="/more" element={<Table filterQuery={FilterQuery.More} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
