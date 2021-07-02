/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { _t } from 'matrix-react-sdk/src/languageHandler';
import dis from "matrix-react-sdk/src/dispatcher/dispatcher";
import { MatrixClientPeg } from 'matrix-react-sdk/src/MatrixClientPeg';
import DeviceListener from '../SumraDeviceListener';
import ToastStore from "matrix-react-sdk/src/stores/ToastStore";
import { Action } from "matrix-react-sdk/src/dispatcher/actions";
import * as sdk from "matrix-react-sdk/src/index"
import { UserTab } from "../components/views/dialogs/SumraUserSettingsDialog";


function toastKey(deviceId: string) {
    return "unverified_session_" + deviceId;
}

export const showToast = async (deviceId: string) => {
    const cli = MatrixClientPeg.get();

    const onAccept = () => {
        DeviceListener.sharedInstance().dismissUnverifiedSessions([deviceId]);
        dis.dispatch({
            action: Action.ViewUserSettings,
            initialTabId: UserTab.Security,
        });
    };

    const onReject = () => {
        DeviceListener.sharedInstance().dismissUnverifiedSessions([deviceId]);
    };

    const device = await cli.getDevice(deviceId);
const GenericToast = sdk.getComponent("views.toasts.GenericToast")
    ToastStore.sharedInstance().addOrReplaceToast({
        key: toastKey(deviceId),
        title: _t("New login. Was this you?"),
        icon: "verification_warning",
        props: {
            description: device.display_name,
            detail: _t("%(deviceId)s from %(ip)s", {
                deviceId,
                ip: device.last_seen_ip,
            }),
            acceptLabel: _t("Check your devices"),
            onAccept,
            rejectLabel: _t("Later"),
            onReject,
        },
        component: GenericToast,
        priority: 80,
    });
};

export const hideToast = (deviceId: string) => {
    ToastStore.sharedInstance().dismissToast(toastKey(deviceId));
};
