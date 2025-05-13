
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon, User, Bell, Shield, Globe, Database, Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';

const Settings = () => {
  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been updated successfully",
    });
  };
  
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Configure your account and system preferences
        </p>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <SettingsIcon className="h-5 w-5 text-accent" />
            System Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account" className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-12 w-12 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Admin User</h3>
                  <p className="text-muted-foreground">administrator@example.com</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Change Avatar
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input 
                    type="text"
                    className="w-full bg-background rounded-md p-2 text-sm border border-border"
                    defaultValue="Admin User"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input 
                    type="email"
                    className="w-full bg-background rounded-md p-2 text-sm border border-border"
                    defaultValue="administrator@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Role</label>
                  <input 
                    type="text"
                    className="w-full bg-background rounded-md p-2 text-sm border border-border"
                    defaultValue="System Administrator"
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Department</label>
                  <select className="w-full bg-background rounded-md p-2 text-sm border border-border">
                    <option>Emergency Management</option>
                    <option>Resource Allocation</option>
                    <option>Drone Operations</option>
                    <option>Analytics</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <Button variant="outline" className="mr-2">Cancel</Button>
                <Button className="bg-accent hover:bg-accent/80" onClick={handleSaveSettings}>
                  Save Changes
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Notification Preferences</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Emergency Alerts</p>
                      <p className="text-sm text-muted-foreground">Receive critical emergency notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Resource Allocation Updates</p>
                      <p className="text-sm text-muted-foreground">Notifications about resource allocation changes</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Drone Mission Status</p>
                      <p className="text-sm text-muted-foreground">Updates on drone mission status changes</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">System Notifications</p>
                      <p className="text-sm text-muted-foreground">System maintenance and update notifications</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">AI Prediction Alerts</p>
                      <p className="text-sm text-muted-foreground">Notifications about new AI disaster predictions</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button className="bg-accent hover:bg-accent/80" onClick={handleSaveSettings}>
                    Save Preferences
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Security Settings</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Current Password</label>
                    <input 
                      type="password"
                      className="w-full bg-background rounded-md p-2 text-sm border border-border"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">New Password</label>
                    <input 
                      type="password"
                      className="w-full bg-background rounded-md p-2 text-sm border border-border"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirm New Password</label>
                    <input 
                      type="password"
                      className="w-full bg-background rounded-md p-2 text-sm border border-border"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Biometric Login</p>
                      <p className="text-sm text-muted-foreground">Allow biometric authentication for faster login</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button variant="outline" className="mr-2">Cancel</Button>
                  <Button className="bg-accent hover:bg-accent/80" onClick={handleSaveSettings}>
                    Update Security Settings
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="appearance" className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Appearance Settings</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Theme</p>
                      <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Sun className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full bg-accent text-accent-foreground">
                        <Moon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Compact Mode</p>
                      <p className="text-sm text-muted-foreground">Display more information with compact UI</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Animations</p>
                      <p className="text-sm text-muted-foreground">Enable UI animations and transitions</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button className="bg-accent hover:bg-accent/80" onClick={handleSaveSettings}>
                    Save Appearance
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="system" className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">System Configuration</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Synchronization</p>
                      <p className="text-sm text-muted-foreground">Auto-sync data between devices</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Offline Mode</p>
                      <p className="text-sm text-muted-foreground">Enable functionality during connection loss</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Collection</p>
                      <p className="text-sm text-muted-foreground">Allow anonymous usage data collection</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="space-y-2 pt-4">
                    <label className="text-sm font-medium">System Language</label>
                    <select className="w-full bg-background rounded-md p-2 text-sm border border-border">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button className="bg-accent hover:bg-accent/80" onClick={handleSaveSettings}>
                    Save System Settings
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Settings;
