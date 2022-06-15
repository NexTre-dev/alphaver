import * as chalk from 'chalk';
import * as util from 'util'
import * as moment from 'moment';

export class Formatter {
	public static blockquote(text: string): string {
		return `${chalk.bgHex(Colors.BG)(` ${text} `)}`;
	}

	/** @deprecated  */
	public static blockquote_utf8(text: string): string {
		return `${chalk.hex(Colors.BG)('\ue0b6')}${chalk.bgHex(Colors.BG)(
			`${text}`,
		)}${chalk.hex(Colors.BG)('\ue0b4')}`;
	}

	public static bold(text: string): string {
		return `${chalk.bold(`${text}`)}`;
	}

	public static italic(text: string): string {
		return `${chalk.italic(`${text}`)}`;
	}

	public static underline(text: string): string {
		return `${chalk.underline(`${text}`)}`;
	}

	public static strikethrough(text: string): string {
		return `${chalk.strikethrough(`${text}`)}`;
	}
}

/**
 * A logger util for console output.
 * Please don't use it anywhere else without credit.
 * @author _NexTre_
 * @license GPL-3.0
 */
export default class Logger {
	public static info(...args: any[]): void {
		this.log('   INFO', Colors.INFO, false, ...args);
	}

	public static success(...args: any[]): void {
		this.log('SUCCESS', Colors.SUCCESS, false, ...args);
	}

	public static warn(...args: any[]): void {
		this.log('   WARN', Colors.WARNING, false, ...args);
	}

	public static error(...args: any[]): void {
		this.log('  ERROR', Colors.ERROR, true, ...args);
	}

	public static crit(...args: any[]): void {
		this.log('   CRIT', Colors.CRIT, true, ...args);
	}

	public static help(...args: any[]): void {
		this.log('   HELP', Colors.HELP, false, ...args);
	}

	public static debug(...args: any[]): void {
		this.log('  DEBUG', Colors.DEBUG, false, ...args);
	}

	public static log(str: string, color: Colors, colorize: boolean, ...args: any[]): void {
		args.forEach((arg, index) => {
			if(Array.isArray(arg) || typeof arg === 'object') {
				args[index] = util.inspect(arg, { colors: true, depth: null, })
			}
		})

		if(args.some(arg => (arg as string).toString().includes('\n'))) {
			console.log(this.format(str, color), "Displaying multi-line output:");
			args.forEach(arg => {
				arg.split('\n').forEach((line, index) => {
					const suffix = ` Line ${index+1}`;
					const suffix_spaces = " ".repeat(Math.max(0, 20 - suffix.length)) + suffix;

					console.log(this.format(str, color, suffix_spaces), line);
				})
			});
		} else {
			console.log(this.format(str, color), ...args);
		}
	}

	private static format(str: string, color: Colors, suffix?: string) {
		return `${chalk.bgHex(color).hex(Colors.FG).bold(` ${str} `)}${chalk.bgHex(Colors.BG)(
			` ${suffix || moment().format('YY-MM-DD hh:mm:ss A')} `,
		)}${chalk.bgHex(color)(' ')}`;
	}
}

export enum Colors {
	INFO = '#04a5e5',
	SUCCESS = '#40a02b',
	WARNING = '#df8e1d',
	ERROR = '#e64553',
	CRIT = '#d20f39',
	HELP = '#c6a0f6',
	DEBUG = '#7287fd',
	BG = '#363a4f',
	FG = '#ffffff',
}
