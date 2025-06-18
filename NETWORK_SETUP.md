# Network Connectivity Management

This project includes comprehensive network connectivity management with automatic no-internet handling.

## Features

### 🌐 Automatic Network Detection
- Automatically detects network connectivity changes
- Shows "No Internet" screen when disconnected
- Provides retry functionality

### 📱 Components

#### NoInternet Component
Displays when the device is offline with:
- Clean, user-friendly UI
- WiFi icon with slash overlay
- Retry button to check connectivity
- Clear messaging

#### NetworkStatusBar Component
Optional status bar that shows:
- Current connection status
- Connection type (WiFi, Cellular, etc.)
- Can be shown always or only when offline

## Setup

### 1. Dependencies
```bash
npm install @react-native-community/netinfo
```

### 2. Android Permissions
Added to `android/app/src/main/AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

### 3. App Integration
The `NetworkProvider` is already integrated in `App.tsx`:
```tsx
import { NetworkProvider } from './src/providers/NetworkProvider';

function App() {
  return (
    <Provider store={store}>
      <NetworkProvider>
        <RootNavigator />
      </NetworkProvider>
    </Provider>
  );
}
```

## Usage

### Using the Network Hook
```tsx
import { useNetwork } from '../providers/NetworkProvider';

const MyComponent = () => {
  const { 
    isConnected, 
    isInternetReachable, 
    type, 
    isOffline, 
    checkConnectivity 
  } = useNetwork();

  const handleRefresh = async () => {
    const connected = await checkConnectivity();
    if (connected) {
      // Refresh data
    }
  };

  return (
    <View>
      {isOffline && <Text>You're offline!</Text>}
      <Button title="Refresh" onPress={handleRefresh} />
    </View>
  );
};
```

### Adding NetworkStatusBar to Screens
```tsx
import NetworkStatusBar from '../../../components/common/NetworkStatusBar';

const MyScreen = () => {
  return (
    <View>
      <Header title="My Screen" />
      <NetworkStatusBar /> {/* Shows offline status */}
      {/* or */}
      <NetworkStatusBar showWhenConnected={true} /> {/* Always shows status */}
      
      {/* Rest of your screen content */}
    </View>
  );
};
```

## How It Works

1. **NetworkProvider**: Wraps the entire app and monitors connectivity
2. **useNetworkConnectivity Hook**: Uses `@react-native-community/netinfo` to monitor network state
3. **Automatic Display**: When offline, automatically shows `NoInternet` component instead of the app
4. **Retry Mechanism**: Users can tap "Try Again" to recheck connectivity
5. **Context API**: Network state is available throughout the app via `useNetwork()` hook

## Files Structure

```
src/
├── components/
│   └── common/
│       ├── NoInternet.tsx          # No internet screen
│       └── NetworkStatusBar.tsx    # Optional status bar
├── hooks/
│   └── useNetworkConnectivity.ts   # Network monitoring hook
├── providers/
│   └── NetworkProvider.tsx         # Network context provider
└── screens/
    └── users/
        └── ManageUsersScreen/
            └── index.tsx           # Example usage
```

## Testing

To test the offline functionality:
1. **Android Emulator**: Use "Data" > "Off" in extended controls
2. **iOS Simulator**: Device > Network Link Conditioner > 100% Loss
3. **Physical Device**: Turn off WiFi and mobile data

## Customization

### Styling NoInternet Component
Modify `src/components/common/NoInternet.tsx` styles to match your app's design.

### Custom Network Messages
Modify the NetworkStatusBar component to show custom messages based on connection type.

### API Retry Logic
Add automatic retry logic to your API calls when network is restored:

```tsx
const { isConnected } = useNetwork();

useEffect(() => {
  if (isConnected) {
    // Retry failed requests
    refetchAllData();
  }
}, [isConnected]);
```
