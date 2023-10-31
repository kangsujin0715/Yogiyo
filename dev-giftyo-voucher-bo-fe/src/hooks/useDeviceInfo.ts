import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';
type OsType = 'android' | 'ios' | 'other';

interface DeviceInfo {
  deviceType: DeviceType;
  osType: OsType;
}

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    deviceType: 'mobile',
    osType: 'other',
  });

  useEffect(() => {
    const handleDeviceInfo = () => {
      const userAgent = navigator.userAgent.toLowerCase();

      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);
      const isAndroid = /android/g.test(userAgent);
      const isIOS = /iphone|ipad|ipod/g.test(userAgent);

      const deviceType: DeviceType = isMobile
        ? 'mobile'
        : isTablet
        ? 'tablet'
        : 'desktop';
      const osType: OsType = isAndroid ? 'android' : isIOS ? 'ios' : 'other';

      setDeviceInfo({
        deviceType: deviceType,
        osType: osType,
      });
    };

    handleDeviceInfo();
  }, []);

  return deviceInfo;
};

export default useDeviceInfo;
