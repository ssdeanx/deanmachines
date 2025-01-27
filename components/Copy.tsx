import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function ClipboardCopy() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 20,
  });

  const [copiedData, setCopiedData] = useState('');

  const initialState = {
    ...data.initialState,
    columns: {
      columnVisibilityModel: {
        id: false,
        desk: false,
      },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ height: 400 }}>
        <DataGrid
          {...data}
          initialState={initialState}
          checkboxSelection
          disableRowSelectionOnClick
          isCellEditable={(_: any) => false}
          onClipboardCopy={(copiedString) => setCopiedData(copiedString)}
          ignoreValueFormatterDuringExport
        />
      </div>
      <Alert severity="info" sx={{ width: '100%', mt: 1 }}>
        <AlertTitle>Copied data:</AlertTitle>
        <code
          style={{
            display: 'block',
            maxHeight: 200,
            overflow: 'auto',
            whiteSpace: 'pre-line',
          }}
        >
          {copiedData}
        </code>
      </Alert>
    </div>
  );
}
