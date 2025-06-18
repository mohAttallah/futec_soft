export interface UserData {
    UserNo: number;
    UserName: string;
    UserPassword: string;
    IsActive: boolean;
    GroupType: number;
    Branch: string;
    BranchDesc: string;
    GroupArName: string;
    GroupEnName: string;
}

export interface MessageState {
    visible: boolean;
    message: string;
    type: 'error' | 'success' | 'warning';
}

export interface UserCardProps {
    user: UserData;
    onPress: (user: UserData) => void;
    onEdit: (user: UserData) => void;
    onDelete: (user: UserData) => void;
    styles: any;
}

export interface UserModalProps {
    visible: boolean;
    user: UserData | null;
    onClose: () => void;
    styles: any;
}

export interface EditUserModalProps extends UserModalProps {
    onSave: () => void;
    onInputChange: (field: keyof UserData, value: string | boolean) => void;
}

export interface DeleteUserModalProps extends UserModalProps {
    onConfirm: () => void;
}

export interface SearchSectionProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    onAddUser: () => void;
    styles: any;
}

export interface UserGroup {
    GroupId: number;
    GroupArName: string;
    GroupEnName: string;
    IsActive: boolean;
}

export interface Branch {
    BranchId: number;
    BranchNameAr: string;
    BranchNameEn: string;
    TaxId: string;
    Phones: string;
    Mobiles: string;
    Website: string | null;
    Email: string | null;
    Address: string | null;
    City: string | null;
    Street: string | null;
}

export interface BottomSheetModalProps {
    visible: boolean;
    onClose: () => void;
    title: string;
    styles: any;
}

export interface GroupBottomSheetProps extends BottomSheetModalProps {
    userGroups: UserGroup[];
    selectedGroup: UserGroup | null;
    onSelectGroup: (group: UserGroup) => void;
}

export interface BranchBottomSheetProps extends BottomSheetModalProps {
    branches: Branch[];
    selectedBranch: Branch | null;
    onSelectBranch: (branch: Branch) => void;
}

export interface UserFormProps {
    userNumber: string;
    username: string;
    password: string;
    selectedGroup: UserGroup | null;
    selectedBranch: Branch | null;
    isActive: boolean;
    onUserNumberChange: (value: string) => void;
    onUsernameChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
    onGroupPress: () => void;
    onBranchPress: () => void;
    onActiveChange: (value: boolean) => void;
    styles: any;
}
