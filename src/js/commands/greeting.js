export default function greeting(initial=false) {

/*var message =
"   __  ______  ______  ______  ______  __  __  ______  ______  ______  ______  ______  ______  \n"+
"  /\ \/\  ___\/\  ___\/\  ___\/\__  _\/\ \_\ \/\  ___\/\  == \/\  __ \/\  == \/\  __ \/\__  _\ \n"+
" _\_\ \ \  __\\ \  __\\ \  __\\/_/\ \/\ \  __ \ \  __\\ \  __<\ \ \/\ \ \  __<\ \ \/\ \/_/\ \/ \n"+
"/\_____\ \_____\ \_\   \ \_\     \ \_\ \ \_\ \_\ \_____\ \_\ \_\ \_____\ \_____\ \_____\ \ \_\ \n"+
"\/_____/\/_____/\/_/    \/_/      \/_/  \/_/\/_/\/_____/\/_/ /_/\/_____/\/_____/\/_____/  \/_/ \n";*/


/*var signature =
        ['Jeff Mills', '(c) 1983 - 2015 jefftherobot',
         '   __  ______  ______  ______  ______  __  __  ______  ______  ______  ______  ______  ______ ',
         '  /\\ \\/\\  ___\\/\\  ___\\/\\  ___\\/\\__  _\\/\\ \\_\\ \\/\\  ___\\/\\  == \\/\\  __ \\/\\  == \\/\\  __ \\/\\__  _\\',
         ' _\\_\\ \\ \\  __\\\\ \\  __\\\\ \\  __\\\\/_/\\ \\/\\ \\  __ \\ \\  __\\\\ \\  __<\\ \\ \\/\\ \\ \\  __<\\ \\ \\/\\ \\/_/\\ \\/',
         '/\\_____\\ \\_____\\ \\_\\   \\ \\_\\     \\ \\_\\ \\ \\_\\ \\_\\ \\_____\\ \\_\\ \\_\\ \\_____\\ \\_____\\ \\_____\\ \\ \\_\\',
         '\\/_____/\\/_____/\\/_/    \\/_/      \\/_/  \\/_/\\/_/\\/_____/\\/_/ /_/\\/_____/\\/_____/\\/_____/  \\/_/'
    ].join('\n');
*/

var signature = ['jefftherobot(R) Version 0.1 Alpha', '   (C)Copyright 1983 - 2015.', '\n',
        '                     °ÜÜÜÜÜ²ÛÛÛÛ ±²ÛÛ²²ÜÜÜ°                      ',
        '                 °Ü²ÛÛÛÛ²ßßßßßß  °ßßßßßÛÛÛÛ²Ü                    ',
        '               °²ÛÛÛß±ÜÜÜÛÛÛÛÛÛÛÛÛÛÛÛÛÛÜÜÜ²ß²Û                   ',
        '               ²ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ²                  ',
        '              ÞÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ²                 ',
        '              ÛÛ²ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ²°                ',
        '             ±ÛÛ±ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ²°±                ',
        '             ²ÛÛ ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ²  ±°               ',
        '             ÛÛÝÞÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ²±   °°               ',
        '             ÛÛÝÞÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ²ßßß     ±Ý               ',
        '             ²ÛÛ ÛÛÛÛÛÛÛÛÛÛ²ßßßßßß°     ÜÜÜÜ²ÛÛÛÞÝ               ',
        '             ±²ß °ß°             ÜÜÜÜ²ÛÛßßß   ²Û±                ',
        '              °                 ²±ßß°          ÛÝ                ',
        '                               ÞÛÛÝ            ÞÛ                ',
        '                              ÜÛÛßÛ²Ü         ±ÛÛ                ',
        '                            ÜÛÛ²  ²ÛÛÛÛ²ÜÜÜÜÜ²ÛÛÛÝ               ',
        '              ÜÜÜ°   °°ÜÜÜÛÛ²²Û    ÛÛÛÛÛÛÛÛÛÛ²²ÛÛÛÜ              ',
        '             ²ÛÛ²²²²²²²²ÛÛÛÛÛÛÝ °  ÞÛÛÛÛÛÛÛÛÛÛÛÛÛÛ²²             ',
        '             ±ÛÛÛÛÛÛÛÛÛÛÛ²ÛÛÛÛ° ÞÝ ÞÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ              ',
        '              ²ÛÛÛÛÛÛÛ²²²±²ÛÛÜ  ²Ý  ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÝ              ',
        '     Ü         ²ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÜ±ÜÜÛÛÛÛÛÛ²ßß²²ÛÛÛÛ²       Ü      ',
        '   ÜÛÝ          ßßß   ßß²ÛÛÛÛ²ÛÛÛ²ÛÛÛ²ÛÛÛ°                ÞÛÜ    ',
        '  ²Û²                    ²ßßß±ÛÛÛ±ÛÛ²±²ßßÝ                 ²Û²   ',
        ' ²ÛÛÛÛÜ                  °±Û±° Ü²ßÜÜß ÜÛ±                ÜÛÛÛÛ²  ',
        'ß²ÛÛÛÛÛÛÜ                 ßßß ²ÛÛ ÛÛ²°ßßß              ÜÛÛÛÛÛÛ²ß ',
        '  ß±ÛÛß²ÛÛÜ             ÜÜ            ÜÜ             ÜÛÛ²ßÛÛ±ß   ',
        '  ÜÛÛß²ÛÛÛÛÛÜ       ÜÜÛÛß              ßÛÛÜÜ       ÜÛÛÛÛÛ²ßÛÛÜ   ',
        ' ÛÛß  ß²ÛÛÛÛ²²°  ÜÛÛÛÛÛÛÝ              ÞÛÛÛÛÛÛÜ  °²²ÛÛÛÛ²ß  ßÛÛ  ',
        'ÞÛÝ     ß²ÛÛ²° ÜÛÛÛßß²ÛÛÛ              ÛÛÛ²ßßÛÛÛÜ °²ÛÛ²ß     ÞÛÝ ',
        ' ²ÛÜ      ßß ÜÛÛÛß Ü ß²ßßß            ßßß²ß Ü ßÛÛÛÜ ßß      ÜÛ²  ',
        '  ßÛÛ²ÜÜÜÜ²ÛÛÛÛÛÝÜ²ÛÛÜ                    ÜÛÛ²ÜÞÛÛÛÛÛ²ÜÜÜÜ²ÛÛß   ',
        '   °ßß²ÛÛÛÛÛÛÛÛ² ÛÛÛ² ßÜ                Üß ²ÛÛÛ ²ÛÛÛÛÛÛÛÛ²ßß°    ',
        '           ßßÛÛÝ ßÛ²Û²  ßÜ            Üß  ²Û²Ûß ÞÛÛßß            ',
        '              Þ²°  ßÛÛÛÜ  ß²Ü      Ü²ß  ÜÛÛÛß  °²Ý               ',
        '               °ßß   ßÛÛÛÜ   ßßÜÜ ß   Ü²ÛÛß   ßß°                ',
        '                       ß²ÛÛ²Ü°   ßßßÜÜÜ ß                        ',
        '                 ÜÜÜ²²ßßß ßÛÛÛÛÜÜ°     ßßß²²ÜÜÜ                  ',
        ' ß²ÜÜÜÜÜÜÜÜ²ßßßßß°       °Ü ß²ÛÛÛÛ²ÜÜÜ°       °ßßßßß²ÜÜÜÜÜÜÜÜ²ß  ',
        '   ßÜ             °ÜÜÜ²ÛÛÛÛÛ²Ü ßß²ÛÛÛÛÛÛÛ²ÜÜÜ°             Üß    ',
        '    °²Ü  °²ÜÜÜÜÛÛÛÛÛÛÛÛÛÛÛÛßß      ßßÛÛÛÛÛÛÛÛÛÛÛÛÜÜÜÜ²°  Ü²°     ',
        '       ßÜ°   ßß²ÛÛÛÛÛÛ²ßß              ßß²ÛÛÛÛÛÛ²ßß   °Üß        ',
        '         ß²ÜÜÜ²ÛÛ²ßß                        ßß²ÛÛ²ÜÜÜ²ß          ',
        '            ßßß                                  ßßß             '
		].join('\n');



	if(initial){
		return signature + '\n';
	}else{
		this.echo(signature + '\n')
	}
}