import React, { Component, ReactNode, useEffect, useState } from 'react';
import TreeProvider from '../providers/TreeProvider';
import { Table } from 'antd';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setItems } from '../store/slices/treeSlice';
import TreeSelect from './TreeSelect';
import TableProperties from './TableProperties';

export function Home() {
  const dispatch = useAppDispatch();

  return <div style={{ display: 'flex', gap: '20px' }} >
    <TreeSelect />

    <TableProperties />
  </div>
}
