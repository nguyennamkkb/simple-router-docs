import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { ModelsPage } from '@/pages/ModelsPage';
import { ApiGuidePage } from '@/pages/ApiGuidePage';
import { ClaudeCodePage } from '@/pages/ClaudeCodePage';
import { CursorPage } from '@/pages/CursorPage';
import { OpenCodePage } from '@/pages/OpenCodePage';
import { DroidPage } from '@/pages/DroidPage';
import { AmpPage } from '@/pages/AmpPage';
import { KiloPage } from '@/pages/KiloPage';
import { RooCodePage } from '@/pages/RooCodePage';
import { ClinePage } from '@/pages/ClinePage';
import { ZedPage } from '@/pages/ZedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="models" element={<ModelsPage />} />
          <Route path="api-guide" element={<ApiGuidePage />} />
          <Route path="claude-code" element={<ClaudeCodePage />} />
          <Route path="cursor" element={<CursorPage />} />
          <Route path="opencode" element={<OpenCodePage />} />
          <Route path="droid" element={<DroidPage />} />
          <Route path="amp" element={<AmpPage />} />
          <Route path="kilo" element={<KiloPage />} />
          <Route path="roo-code" element={<RooCodePage />} />
          <Route path="cline" element={<ClinePage />} />
          <Route path="zed" element={<ZedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
