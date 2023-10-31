import * as React from 'react';
import LoginHistoryScenes from 'src/components/page-scenes/system/history/LoginHistory.scenes';
import ModifyHistoryScenes from 'src/components/page-scenes/system/history/ModifyHistory.scenes';
import InformationReadHistoryScenes from 'src/components/page-scenes/system/history/InformationReadHistory.scenes';
import UploadHistoryScenes from 'src/components/page-scenes/system/history/UploadHistory.scenes';
import DownloadHistoryScenes from 'src/components/page-scenes/system/history/DownloadHistory.scenes';
import TabView from 'src/components/ui/tab/TabView';

const tabs = [
  { text: '로그인 이력', panel: <LoginHistoryScenes /> },
  { text: '변경 이력', panel: <ModifyHistoryScenes /> },
  { text: '개인정보 열람 이력', panel: <InformationReadHistoryScenes /> },
  { text: '엑셀 업로드 이력', panel: <UploadHistoryScenes /> },
  { text: '엑셀 다운로드 이력', panel: <DownloadHistoryScenes /> },
];
/**
 * 열람 이력 탭 컨트롤러 페이지
 * @returns {React.JSX.Element}
 * @constructor
 */
const HistoryScenes = () => {
  return <TabView tabs={tabs} />;
};
export default HistoryScenes;
