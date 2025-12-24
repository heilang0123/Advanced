import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calculator, TrendingUp, Shield, Users, Phone, MessageCircle } from 'lucide-react';
const Index = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [calculatedProfit, setCalculatedProfit] = useState<{
    idr: string;
    usdt: string;
  } | null>(null);
  const USDT_RATE = 16507;
  const PROFIT_RATE = 0.6; // 60% profit

  const presetAmounts = [{
    idr: 3000000,
    usdt: 588,
    profit: 9823745
  }, {
    idr: 4000000,
    usdt: 762,
    profit: 12730772
  }, {
    idr: 5000000,
    usdt: 1012,
    profit: 16907534
  }];
  const advisors = [{
    name: 'Joko Hartono',
    phone: '+62 812-2790-5685'
  }, {
    name: 'Harianto Wijaya',
    phone: '+62 853-7193-4793'
  }];
  const calculateProfit = (amount: number) => {
    const usdt = Math.round(amount / USDT_RATE);
    const profitIdr = Math.round(amount * (1 + PROFIT_RATE));
    return {
      idr: profitIdr.toLocaleString('id-ID'),
      usdt: usdt.toString()
    };
  };
  const handleCustomCalculation = () => {
    const amount = parseInt(customAmount.replace(/[^0-9]/g, ''));
    if (amount >= 3000000) {
      const profit = calculateProfit(amount);
      setCalculatedProfit(profit);
      setSelectedAmount(amount);
    }
  };
  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setShowConfirmation(true);
  };
  const handleWhatsApp = (advisor: typeof advisors[0]) => {
    const message = `Halo ${advisor.name}, saya siap untuk memulai LEVEL ADVANCED. Saya memilih modal Rp ${selectedAmount?.toLocaleString('id-ID')} untuk 3 siklus perdagangan. Mohon konfirmasi ketersediaan Anda dan arahkan saya untuk memulai sesi lanjutan. Terima kasih.`;
    const whatsappUrl = `https://wa.me/${advisor.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const formatCurrency = (value: string) => {
    const numbers = value.replace(/[^0-9]/g, '');
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-primary/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <img src="https://yourcryptolibrary.com/wp-content/uploads/2021/12/Bitvavo-Logo-klein1.png" alt="BITVAVO Logo" className="w-10 sk-edit-loading h-10 object-cover" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary text-left pt-0 pb-0 pr-[nullpx] pl-[nullpx]">BITVAVO</h1>
                <p className="text-sm text-muted-foreground">Trading Advisory</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="crypto-icon">BTC</Badge>
              <Badge variant="secondary" className="crypto-icon">ETH</Badge>
              <Badge variant="secondary" className="crypto-icon">USDT</Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-400 to-white text-gray-800 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">LEVEL ADVANCED</h1>
            <h2 className="text-2xl mb-6">Sesi Perdagangan Eksklusif</h2>
            <p className="text-xl mb-4">Maksimalkan Aset Anda melalui 3 Siklus Perdagangan Intensif</p>
          </div>
          
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <p className="text-lg leading-relaxed">Selamat atas keberhasilan dan performa Anda yang teruji di fase Orientation! Kami kembali membuka akses perdagangan bagi investor terpilih dan terseleksi. Level Advanced dirancang secara khusus untuk memanfaatkan potensi pasar secara maksimal dan progresif.</p>
            
            <p className="text-lg leading-relaxed">
              <strong>Periode Perdagangan:</strong> Level ini melibatkan 3 Siklus Perdagangan Intensif dengan pendampingan penuh dari tim Analisis kami. Inilah saatnya Anda mengamankan target keuntungan kumulatif sebesar 50% - 60% dari total modal investasi Anda.
            </p>
          </div>
        </div>

        {/* Commitment Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary" />
              <span>Komitmen Pendampingan & Jaminan Keunggulan</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg font-semibold">Kami menjamin sesi perdagangan ini didukung penuh oleh tim ahli kami.</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">📊 Analisis Proaktif</h3>
                <p className="text-sm">Keputusan entry dan exit pasar didasarkan pada riset fundamental dan teknikal mendalam dari tim Analisis internal kami, bukan spekulasi.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">🎯 Strategi Terarah</h3>
                <p className="text-sm">Implementasi strategi yang lebih matang dan adaptif, terbagi dalam 3 siklus perdagangan untuk mengoptimalkan akumulasi keuntungan.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">🤝 Pendampingan Penuh</h3>
                <p className="text-sm">Advisor Anda siap mendampingi Anda secara intensif hingga potensi profit maksimal yang telah ditargetkan tercapai.</p>
              </div>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <p className="text-sm">
                <strong>Penting:</strong> Penawaran ini bersifat sangat terbatas dan hanya dibuka bagi investor yang telah teruji performanya. Jangan lewatkan momentum terbaik untuk melangkah lebih jauh dan meraih hasil investasi yang transformatif. Ambil kendali pertumbuhan aset Anda hari ini! 🤝
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Profit Projections */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="w-6 h-6 text-primary" />
              <span>📊 Proyeksi Keuntungan (Kumulatif 3 Siklus)</span>
            </CardTitle>
            <p className="text-muted-foreground">Asumsi Kurs USDT: Rp {USDT_RATE.toLocaleString('id-ID')}</p>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-6">Pilih Nominal Investasi Anda</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {presetAmounts.map((amount, index) => <Card key={index} className="profit-card hover:shadow-lg transition-all cursor-pointer" onClick={() => handleSelectAmount(amount.idr)}>
                  <CardContent className="p-6 text-center">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Modal Awal</p>
                        <p className="text-2xl font-bold text-primary">Rp {amount.idr.toLocaleString('id-ID')}</p>
                        <p className="text-sm text-muted-foreground">({amount.usdt} USDT)</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <p className="text-sm text-muted-foreground">Estimasi Keuntungan</p>
                        <p className="text-xl font-bold text-green-600">Rp {amount.profit.toLocaleString('id-ID')}</p>
                      </div>
                      
                      <Button className="w-full bitvavo-gradient text-white border-0">
                        Pilih Level Advanced
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
            
            {/* Custom Amount Calculator */}
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-lg">🔧 Fitur Khusus: Kalkulasi Kustom</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Masukkan nominal investasi yang Anda inginkan (Minimal Rp 3.000.000):
                  </label>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Input type="text" placeholder="3.000.000" value={customAmount} onChange={e => {
                      const formatted = formatCurrency(e.target.value);
                      setCustomAmount(formatted);
                    }} className="text-lg" />
                    </div>
                    <Button onClick={handleCustomCalculation} disabled={!customAmount || parseInt(customAmount.replace(/[^0-9]/g, '')) < 3000000}>
                      Hitung Proyeksi Keuntungan
                    </Button>
                  </div>
                </div>
                
                {calculatedProfit && <div className="bg-white p-4 rounded-lg border border-primary/20">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Modal dalam USDT</p>
                        <p className="text-xl font-bold">{calculatedProfit.usdt} USDT</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Estimasi Keuntungan</p>
                        <p className="text-xl font-bold text-green-600">Rp {calculatedProfit.idr}</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bitvavo-gradient text-white border-0" onClick={() => handleSelectAmount(parseInt(customAmount.replace(/[^0-9]/g, '')))}>
                      Pilih Level Advanced
                    </Button>
                  </div>}
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </main>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>✅ Konfirmasi Pilihan</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>
              Anda Telah Memilih Modal Awal: <strong>Rp {selectedAmount?.toLocaleString('id-ID')}</strong>. 
              Langkah selanjutnya adalah terhubung dengan Advisor untuk memulai proses. 
              Pilih Advisor Anda di bawah ini:
            </p>
            
            <div className="space-y-3">
              {advisors.map((advisor, index) => <Card key={index} className="advisor-card cursor-pointer" onClick={() => handleWhatsApp(advisor)}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{advisor.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          {advisor.phone}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-green-600">WhatsApp</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-muted/30 border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>© 2024 BITVAVO Trading Advisory | Semua Hak Dilindungi</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
